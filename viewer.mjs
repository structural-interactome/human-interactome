
import { Viewer } from 'https://cdn.jsdelivr.net/npm/molstar@3.0.0/build/viewer/molstar.es.js';

const viewer = new Viewer("viewer", {
  layoutIsExpanded: true,
  showImportControls: false,
});

const baseUrl = "https://structural-interactome.github.io/human-interactome/interaction_structures/";
const defaultFile = "Q6ZV65_O14744_Boltz-2_v2-1-1.cif";

viewer.loadStructureFromUrl(baseUrl + defaultFile, "mmcif");

document.getElementById("structureInput").addEventListener("change", () => {
  const filename = document.getElementById("structureInput").value.trim();
  if (!filename.endsWith(".cif")) {
    alert("Please enter a valid .cif filename");
    return;
  }
  viewer.loadStructureFromUrl(baseUrl + filename, "mmcif")
    .catch(err => alert("Failed to load structure: " + err));
});
