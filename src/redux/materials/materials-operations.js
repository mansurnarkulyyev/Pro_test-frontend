import { createOperation } from "../../shared/utils/utils";
import * as materials from "../../shared/api/materials";

export const fetchLiteratureRequest = createOperation(
  "materials/fetchLiterature",
  materials.getListLiterature
);
export const addLiteratureRequest = createOperation(
  "materials/addLiterature",
  materials.addItemLiterature
);
export const deleteLiteratureRequest = createOperation(
  "materials/deleteLiterature",
  materials.deleteItemLiterature
);

export const fetchResourcesRequest = createOperation(
  "materials/fetchResources",
  materials.getListResources
);
export const addResourcesRequest = createOperation(
  "materials/addResources",
  materials.addItemResources
);
export const deleteResourcesRequest = createOperation(
  "materials/deleteResources",
  materials.deleteItemResources
);
