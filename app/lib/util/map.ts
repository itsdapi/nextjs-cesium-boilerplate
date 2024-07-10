import { Entity, SceneMode, Viewer } from "cesium";

export function initViewer(viewer: Viewer | null) {
  if (!viewer) {
    console.log("Fail to init viewer");
    return;
  }
  viewer.scene.mode = SceneMode.SCENE2D;
}

export function addEntities(viewer: Viewer | null, entities: Entity[]) {
  if (!viewer) {
    console.log("Fail to add entity");
    return;
  }
  entities.forEach((entity) => {
    viewer.entities.add(entity);
  });
  console.log(`Add ${entities.length} item to viewer`)
}
