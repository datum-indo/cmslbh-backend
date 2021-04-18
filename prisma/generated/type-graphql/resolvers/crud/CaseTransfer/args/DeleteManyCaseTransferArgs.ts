import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferWhereInput } from "../../../inputs/CaseTransferWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseTransferArgs {
  @TypeGraphQL.Field(_type => CaseTransferWhereInput, {
    nullable: true
  })
  where?: CaseTransferWhereInput | undefined;
}
