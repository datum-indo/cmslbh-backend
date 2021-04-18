import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseKorbanCreateInput } from "../../../inputs/CaseKorbanCreateInput";
import { CaseKorbanUpdateInput } from "../../../inputs/CaseKorbanUpdateInput";
import { CaseKorbanWhereUniqueInput } from "../../../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseKorbanArgs {
  @TypeGraphQL.Field(_type => CaseKorbanWhereUniqueInput, {
    nullable: false
  })
  where!: CaseKorbanWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseKorbanCreateInput, {
    nullable: false
  })
  create!: CaseKorbanCreateInput;

  @TypeGraphQL.Field(_type => CaseKorbanUpdateInput, {
    nullable: false
  })
  update!: CaseKorbanUpdateInput;
}
