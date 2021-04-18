import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcTemplateCreateInput } from "../../../inputs/SrcTemplateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSrcTemplateArgs {
  @TypeGraphQL.Field(_type => SrcTemplateCreateInput, {
    nullable: false
  })
  data!: SrcTemplateCreateInput;
}
