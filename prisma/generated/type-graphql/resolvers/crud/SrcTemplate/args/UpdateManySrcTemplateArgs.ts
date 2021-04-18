import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcTemplateUpdateManyMutationInput } from "../../../inputs/SrcTemplateUpdateManyMutationInput";
import { SrcTemplateWhereInput } from "../../../inputs/SrcTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySrcTemplateArgs {
  @TypeGraphQL.Field(_type => SrcTemplateUpdateManyMutationInput, {
    nullable: false
  })
  data!: SrcTemplateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SrcTemplateWhereInput, {
    nullable: true
  })
  where?: SrcTemplateWhereInput | undefined;
}
