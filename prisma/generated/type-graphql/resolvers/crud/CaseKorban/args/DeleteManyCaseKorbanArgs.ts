import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseKorbanWhereInput } from "../../../inputs/CaseKorbanWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseKorbanArgs {
  @TypeGraphQL.Field(_type => CaseKorbanWhereInput, {
    nullable: true
  })
  where?: CaseKorbanWhereInput | undefined;
}
