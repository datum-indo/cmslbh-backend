import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePelakuWhereUniqueInput } from "../../../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCasePelakuArgs {
  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: false
  })
  where!: CasePelakuWhereUniqueInput;
}
