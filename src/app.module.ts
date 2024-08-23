import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { FeedModule } from './modules/feed/feed.module';
import { PracticeModule } from './modules/practice/practice.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { PubSubModule } from './modules/pubSub/pubSub.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/modules/**/*.graphql'],
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
    PrismaModule,
    PubSubModule,
    AuthModule,
    FeedModule,
    PracticeModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
