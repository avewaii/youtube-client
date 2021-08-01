import {SearchItemModel} from "../search-item/search-item.model";

export interface SearchResultsModel extends SearchItemModel{
  id: number;
  item: SearchItemModel;
}
