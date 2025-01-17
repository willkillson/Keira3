import { Injectable } from '@angular/core';

import { SearchService } from './search.service';
import { MysqlQueryService } from '../../services/mysql-query.service';
import {
  GAMEOBJECT_TEMPLATE_SEARCH_FIELDS,
  GAMEOBJECT_TEMPLATE_TABLE,
  GameobjectTemplate,
} from '../../types/gameobject-template.type';

@Injectable({
  providedIn: 'root',
})
export class GameobjectSearchService extends SearchService<GameobjectTemplate> {
  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(public readonly queryService: MysqlQueryService) {
    super(queryService, GAMEOBJECT_TEMPLATE_TABLE, GAMEOBJECT_TEMPLATE_SEARCH_FIELDS);
  }
}
