import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcOperatorUpdateManyMutationInput } from "../../../inputs/SrcOperatorUpdateManyMutationInput";
import { SrcOperatorWhereInput } from "../../../inputs/SrcOperatorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySrcOperatorArgs {
  @TypeGraphQL.Field(_type => SrcOperatorUpdateManyMutationInput, {
    nullable: false
  })
  data!: SrcOperatorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SrcOperatorWhereInput, {
    nullable: true
  })
  where?: SrcOperatorWhereInput | undefined;
}
