import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcTemplateWhereInput } from "../../../inputs/SrcTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySrcTemplateArgs {
  @TypeGraphQL.Field(_type => SrcTemplateWhereInput, {
    nullable: true
  })
  where?: SrcTemplateWhereInput | undefined;
}
