import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcAnalisaUpdateManyMutationInput } from "../../../inputs/SrcAnalisaUpdateManyMutationInput";
import { SrcAnalisaWhereInput } from "../../../inputs/SrcAnalisaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySrcAnalisaArgs {
  @TypeGraphQL.Field(_type => SrcAnalisaUpdateManyMutationInput, {
    nullable: false
  })
  data!: SrcAnalisaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SrcAnalisaWhereInput, {
    nullable: true
  })
  where?: SrcAnalisaWhereInput | undefined;
}
