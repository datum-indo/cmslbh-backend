import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseKorbanUpdateInput } from "../../../inputs/CaseKorbanUpdateInput";
import { CaseKorbanWhereUniqueInput } from "../../../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseKorbanArgs {
  @TypeGraphQL.Field(_type => CaseKorbanUpdateInput, {
    nullable: false
  })
  data!: CaseKorbanUpdateInput;

  @TypeGraphQL.Field(_type => CaseKorbanWhereUniqueInput, {
    nullable: false
  })
  where!: CaseKorbanWhereUniqueInput;
}
