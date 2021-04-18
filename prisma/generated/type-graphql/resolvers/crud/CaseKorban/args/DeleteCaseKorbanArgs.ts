import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseKorbanWhereUniqueInput } from "../../../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCaseKorbanArgs {
  @TypeGraphQL.Field(_type => CaseKorbanWhereUniqueInput, {
    nullable: false
  })
  where!: CaseKorbanWhereUniqueInput;
}
