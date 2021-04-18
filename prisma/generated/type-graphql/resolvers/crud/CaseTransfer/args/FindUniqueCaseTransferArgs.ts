import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferWhereUniqueInput } from "../../../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseTransferArgs {
  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferWhereUniqueInput;
}
