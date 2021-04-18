import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseClassificationWhereUniqueInput } from "../../../inputs/CaseClassificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseClassificationArgs {
  @TypeGraphQL.Field(_type => CaseClassificationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseClassificationWhereUniqueInput;
}
