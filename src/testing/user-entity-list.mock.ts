import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    id: 1,
    name: 'Ian Neves',
    email: 'ian@mail.com',
    birthAt: new Date('2000-01-01'),
    password: '$2b$10$KTCMumuAvsZcxgEXCA4.x.sqeqtrWXmB7ptFGkF.f32XW3OE3Awb6',
    role: Role.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'João Carvalho',
    email: 'joao@mail.com',
    birthAt: new Date('2000-01-01'),
    password: '$2b$10$KTCMumuAvsZcxgEXCA4.x.sqeqtrWXmB7ptFGkF.f32XW3OE3Awb6',
    role: Role.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Jones Manoel',
    email: 'jones@mail.com',
    birthAt: new Date('2000-01-01'),
    password: '$2b$10$KTCMumuAvsZcxgEXCA4.x.sqeqtrWXmB7ptFGkF.f32XW3OE3Awb6',
    role: Role.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
