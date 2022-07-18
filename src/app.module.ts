import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsResolver } from './authors.resolver';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: process.cwd() + 'src/schema.gql'
  })],
  controllers: [AppController],
  providers: [AppService, AuthorsResolver],
})
export class AppModule {}
