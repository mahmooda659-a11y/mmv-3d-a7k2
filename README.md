# Mentaki Mount Village — 360° Tour

Internal setup notes. FSM Jayapena & Co.

---

## What's in this folder

```
index.html      the viewer — never needs editing
views.js        the list of views — edit this each project
robots.txt      keeps the tour out of search results
panoramas/      put the JPGs here
```

---

## Publishing, first time only

**1. Make a GitHub account** at github.com. Free.

**2. Create a repository.** Click New. Give it a name nobody would guess —
`mmv-3d-a7k2` rather than `mentaki-mount-village`. Set it **Public**
(Pages needs Pro for private repos). Tick "Add a README". Create.

**3. Upload the folder.** Add file → Upload files. Drag `index.html`,
`views.js`, `robots.txt`, and the whole `panoramas` folder in. Commit.

**4. Switch Pages on.** Settings → Pages → Source: *Deploy from a branch* →
Branch `main`, folder `/ (root)` → Save.

**5. Wait two minutes.** The link appears at the top of that same page:

```
https://<username>.github.io/mmv-3d-a7k2/
```

That's what you WhatsApp to the client.

---

## Every project after that

1. Render the panoramas in Enscape at **8192 × 4096** (High).
2. Rename them to match the filenames in `views.js`.
3. Edit `views.js` — names, groups, and the project title.
4. Upload the changed files to the repo. Live in about a minute.

Optional but worth it: make a 200 × 100 thumbnail of each panorama,
save it as `panoramas/thumb-<name>.jpg`, and add `thumb: "..."` to that
view's block. Without it the strip loads full panoramas as thumbnails,
which is slow on a phone.

---

## Read this before sending anything

**A public repo is public.** The link is unguessable, and `robots.txt`
plus the noindex tag keep it out of Google — but anyone who receives
the link can open it and pass it on. For Reka Jadi's work this is
probably fine. For anything genuinely confidential, it is not.
Tell the client the link is theirs to keep private.

**Test on a phone before sending.** Open the link on your own phone
first, tap through every view, check every direction.

**Check the backdrop.** In a panorama the client can turn all the way
around. Nothing is hidden. Verify Gunung Kinabalu reads correctly and
sits on the right side of frame when facing the front elevation.
