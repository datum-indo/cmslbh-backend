import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePkCreateInput } from "../../../inputs/CasePkCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCasePkArgs {
  @TypeGraphQL.Field(_type => CasePkCreateInput, {
    nullable: false
  })
  data!: CasePkCreateInput;
}
