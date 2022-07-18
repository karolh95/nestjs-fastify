import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Author } from "./models/author.model";

@Resolver(of => Author)
export class AuthorsResolver {

  @Query(returns => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return { id: 0, firstName: 'a', lastName: 'z' };
  }
}