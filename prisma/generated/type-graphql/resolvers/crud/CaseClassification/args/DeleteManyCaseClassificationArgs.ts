import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseClassificationWhereInput } from "../../../inputs/CaseClassificationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseClassificationArgs {
  @TypeGraphQL.Field(_type => CaseClassificationWhereInput, {
    nullable: true
  })
  where?: CaseClassificationWhereInput | undefined;
}
