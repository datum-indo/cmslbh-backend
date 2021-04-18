import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolenceMethodWhereInput } from "../../../inputs/CaseViolenceMethodWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseViolenceMethodArgs {
  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereInput, {
    nullable: true
  })
  where?: CaseViolenceMethodWhereInput | undefined;
}
