import { sign } from 'jsonwebtoken';
import * as passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Body, JsonController, Post } from 'routing-controllers';
import { User } from '../models';
import { UserService } from '../services';

const jwtSecret = process.env.tokenSecret || '$2y$10$rdqLaWaQIlTsialQHaCRVuHCVQp0Mn4W7C485V5tVIaOlFdP7szPS';
const jwtOptions = {
  algorithm: 'HS256',
  expiresIn: '1d'
};

export function setUpPassport() {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
    passReqToCallback: false,
  };

  passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ email: jwt_payload.user.email });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    } catch (e) {
      done(e);
    }
  }));
}

@JsonController('/auth')
export class AuthController {

  constructor(private readonly userService: UserService) {
  }

  @Post('/signin')
  async signIn() {
  }

  @Post('/signup')
  async signUp(@Body() data) {
    const user = await this.userService.create(data);
    const token = sign({ user }, jwtSecret, jwtOptions);

    return { user: user.safe, token };
  }

}