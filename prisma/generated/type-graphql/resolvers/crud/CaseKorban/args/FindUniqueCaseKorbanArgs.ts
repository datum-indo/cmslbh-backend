import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseKorbanWhereUniqueInput } from "../../../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseKorbanArgs {
  @TypeGraphQL.Field(_type => CaseKorbanWhereUniqueInput, {
    nullable: false
  })
  where!: CaseKorbanWhereUniqueInput;
}
