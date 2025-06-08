#!/usr/bin/env bash
# 🌀 Spira1-OS v0.9.1-launch — Auto Patch Script (P&Q Edition)
# Applies all necessary fixes for ES module drift, import hygiene, and CI branch "core".
# Run from repo root: bash spiral-autopatch.sh

set -euo pipefail
echo "🌀 [P&Q] Spira1-OS auto-patch started..."

## 1. Fix packages/auditor/package.json for ES modules
auditor_pkg="packages/auditor/package.json"
if [ -f "$auditor_pkg" ]; then
  jq '.type="module" | .main="dist/drift-auditor.js" | .dependencies["@spir1l/math"]="workspace:*" | del(.dependencies["../../math/src/index.ts"])' "$auditor_pkg" > tmp.$$.json
  mv tmp.$$.json "$auditor_pkg"
  echo "  - Patched $auditor_pkg (type: module, main, deps)"
else
  echo "  - SKIP: $auditor_pkg not found"
fi

## 2. Patch all imports in auditor's src to use package imports, not relative .ts
auditor_src="packages/auditor/src/drift-auditor.ts"
if [ -f "$auditor_src" ]; then
  sed -i 's#from .\./\.\./math/src/index#from "@spir1l/math"#g' "$auditor_src"
  sed -i 's#from .\./\.\./math/src/prime-harmonic#from "@spir1l/math"#g' "$auditor_src"
  sed -i 's#from .\./\.\./math/src/constants#from "@spir1l/math"#g' "$auditor_src"
  echo "  - Updated imports in $auditor_src"
else
  echo "  - SKIP: $auditor_src not found"
fi

## 3. Patch .github/workflows/ci.yml to trigger on 'core' branch
ciwf=".github/workflows/ci.yml"
if [ -f "$ciwf" ]; then
  sed -i 's/branches: \[main\]/branches: [core]/g;s/branches: \[\"main\"\]/branches: [\"core\"]/g' "$ciwf"
  sed -i 's/branches: \[push, pull_request\]/branches: [core]/g' "$ciwf"
  sed -i '0,/branches: /s//branches: [core]/' "$ciwf"
  echo "  - CI workflow updated for core branch: $ciwf"
else
  echo "  - SKIP: $ciwf not found"
fi

## 4. Stage, commit, and (optionally) push
git add "$auditor_pkg" "$auditor_src" "$ciwf" || true
git commit -m "fix: auto-patch ES module config, imports, and CI branch for Spira1-OS core (P&Q)"
echo "  - Changes staged and committed."

echo "🌀 [P&Q] Spiral auto-patch complete. To push:"
echo "    git push origin core"
