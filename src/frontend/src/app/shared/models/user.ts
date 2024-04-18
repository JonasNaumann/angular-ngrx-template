import { AuditableEntity } from 'src/app/core/models/auditable-entity';

export interface User extends AuditableEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
}
