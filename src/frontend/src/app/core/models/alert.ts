import { AlertCategory } from "src/app/shared/enums/alert-category";

export interface Alert{
  code?: number,
  message: string,
  category: AlertCategory
}
