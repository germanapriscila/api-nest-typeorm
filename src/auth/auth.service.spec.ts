import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { userRepositoryMock } from '../testing/user-repository.mock';
import { jwtServiceMock } from '../testing/jwt-service.mock';
import { userServiceMock } from '../testing/user-service.mock';
import { mailerServiceMock } from '../testing/mailer-service.mock';
import { userEntityList } from '../testing/user-entity-list.mock';
import { accessToken } from '../testing/access-token.mock';
import { jwtPayloadMock } from '../testing/jwt-payload.mock';
import { resetToken } from '../testing/reset-token.mock';
import { authRegisterDTO } from '../testing/auth-register-dto.mock';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        userRepositoryMock,
        jwtServiceMock,
        userServiceMock,
        mailerServiceMock,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  test('Validar a definição das variáveis authService', () => {
    expect(authService).toBeDefined();
  });

  describe('Token', () => {
    test('createToken method', () => {
      const result = authService.createToken(userEntityList[0]);
      expect(result).toEqual({ accessToken });
    });

    test('checkToken method', () => {
      const result = authService.checkToken(accessToken);
      expect(result).toEqual(jwtPayloadMock);
    });

    test('isValidToken method', () => {
      const result = authService.isValidToken(accessToken);
      expect(result).toEqual(true);
    });
  });

  describe('Autenticação', () => {
    test('login method', async () => {
      const result = await authService.login('joao@hcode.com.br', '123456');
      expect(result).toEqual({ accessToken });
    });

    test('forget method', async () => {
      const result = await authService.forget('ian@mail,com');
      expect(result).toEqual(true);
    });

    test('reset method', async () => {
      const result = await authService.reset('serena@456', resetToken);
      expect(result).toEqual({ accessToken });
    });

    test('register method', async () => {
      const result = await authService.register(authRegisterDTO);
      expect(result).toEqual({ accessToken });
    });
  });
});
