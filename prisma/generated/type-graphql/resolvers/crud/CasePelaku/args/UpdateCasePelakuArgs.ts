import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePelakuUpdateInput } from "../../../inputs/CasePelakuUpdateInput";
import { CasePelakuWhereUniqueInput } from "../../../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCasePelakuArgs {
  @TypeGraphQL.Field(_type => CasePelakuUpdateInput, {
    nullable: false
  })
  data!: CasePelakuUpdateInput;

  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: false
  })
  where!: CasePelakuWhereUniqueInput;
}
