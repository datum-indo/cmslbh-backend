import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseClassificationCreateInput } from "../../../inputs/CaseClassificationCreateInput";
import { CaseClassificationUpdateInput } from "../../../inputs/CaseClassificationUpdateInput";
import { CaseClassificationWhereUniqueInput } from "../../../inputs/CaseClassificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseClassificationArgs {
  @TypeGraphQL.Field(_type => CaseClassificationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseClassificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseClassificationCreateInput, {
    nullable: false
  })
  create!: CaseClassificationCreateInput;

  @TypeGraphQL.Field(_type => CaseClassificationUpdateInput, {
    nullable: false
  })
  update!: CaseClassificationUpdateInput;
}
