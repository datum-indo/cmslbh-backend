import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseClassificationUpdateInput } from "../../../inputs/CaseClassificationUpdateInput";
import { CaseClassificationWhereUniqueInput } from "../../../inputs/CaseClassificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseClassificationArgs {
  @TypeGraphQL.Field(_type => CaseClassificationUpdateInput, {
    nullable: false
  })
  data!: CaseClassificationUpdateInput;

  @TypeGraphQL.Field(_type => CaseClassificationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseClassificationWhereUniqueInput;
}
