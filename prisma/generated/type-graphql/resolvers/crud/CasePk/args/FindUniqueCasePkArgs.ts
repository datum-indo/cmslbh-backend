import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePkWhereUniqueInput } from "../../../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCasePkArgs {
  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: false
  })
  where!: CasePkWhereUniqueInput;
}
