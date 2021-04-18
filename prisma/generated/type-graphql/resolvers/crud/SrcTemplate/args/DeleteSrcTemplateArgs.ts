import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcTemplateWhereUniqueInput } from "../../../inputs/SrcTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSrcTemplateArgs {
  @TypeGraphQL.Field(_type => SrcTemplateWhereUniqueInput, {
    nullable: false
  })
  where!: SrcTemplateWhereUniqueInput;
}
