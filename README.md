# Face Watch Face

A dependency-free static website. The authored, deployable site is in `dist/`.

Preview from this directory with `python -m http.server 4173 --bind 127.0.0.1 --directory dist`, then visit http://127.0.0.1:4173/.

## Files
- `dist/index.html`: product page
- `dist/style.css`: shared responsive visual design
- `dist/app.js`: local-only expression and face-cream preview
- `dist/privacy/`, `dist/terms/`, `dist/support/`, `dist/data-deletion/`: supporting pages
- `dist/assets/`: descriptively named copies of selected supplied artwork
- Original PNG files remain unchanged at the project root.

## Before Google Play submission

The current legal pages explicitly mark unverified app details. Do not submit the preview as a completed app privacy policy.

1. Confirm the public app and developer names, legal identity, support/privacy email, official Play URL, and supported watches/Wear OS versions.
2. Audit the actual app, manifest, SDKs, network calls, data providers and permissions. Confirm whether heart rate, location/weather, identifiers, analytics, crashes, accounts, or other data are collected, transmitted, retained or shared. Access on-device and collection off-device are different; describe both accurately.
3. Replace pending text in the privacy, support, terms and deletion pages with verified facts, including retention, security, sharing and deletion processes. Confirm the hosting provider's processing and retention. No invented email or unsupported zero-data promise is included.
4. Google Play requires a privacy policy even for apps without personal-data access. It must identify the app/developer, include a privacy contact and required data disclosures, and be on a publicly accessible, active, non-geofenced HTML URL, not a PDF or editable document. Add it to Play Console and inside the app as required.
5. If the app allows account creation, implement the required in-app and external account-deletion pathways; a static explanation alone does not satisfy this. Document what is deleted and any legitimate retention exceptions.
6. Complete Play Console Data safety to match the actual app and all SDKs. Also complete applicable app-access, ads, target-audience, content-rating and health-app declarations. Heart-rate features may trigger additional health permissions and declaration requirements; check the current policy for the implemented functionality.
7. Add the real store link to the homepage once available. Do not use a misleading download button before a listing exists.
8. Publish the final policy publicly on your intended domain. A private Sites review URL cannot serve as Google's public policy URL. Add canonical URLs, sitemap.xml and robots.txt for that verified public origin; remove the draft `noindex` directives after final review. Verify the domain in Search Console if search indexing is desired (optional for app submission).

Official references checked September 16, 2026:
- https://support.google.com/googleplay/android-developer/answer/10144311
- https://support.google.com/googleplay/android-developer/answer/13327111
- https://support.google.com/googleplay/android-developer/answer/10787469

There are no analytics, third-party font requests, cookies, browser storage, forms, or tracking SDKs in the authored site. Hosting/access-control services have their own data practices.
