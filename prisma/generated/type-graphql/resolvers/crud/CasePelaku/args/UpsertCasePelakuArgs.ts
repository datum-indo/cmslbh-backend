import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePelakuCreateInput } from "../../../inputs/CasePelakuCreateInput";
import { CasePelakuUpdateInput } from "../../../inputs/CasePelakuUpdateInput";
import { CasePelakuWhereUniqueInput } from "../../../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCasePelakuArgs {
  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: false
  })
  where!: CasePelakuWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePelakuCreateInput, {
    nullable: false
  })
  create!: CasePelakuCreateInput;

  @TypeGraphQL.Field(_type => CasePelakuUpdateInput, {
    nullable: false
  })
  update!: CasePelakuUpdateInput;
}
