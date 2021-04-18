import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DaftarPengacaraUpdateManyMutationInput } from "../../../inputs/DaftarPengacaraUpdateManyMutationInput";
import { DaftarPengacaraWhereInput } from "../../../inputs/DaftarPengacaraWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDaftarPengacaraArgs {
  @TypeGraphQL.Field(_type => DaftarPengacaraUpdateManyMutationInput, {
    nullable: false
  })
  data!: DaftarPengacaraUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DaftarPengacaraWhereInput, {
    nullable: true
  })
  where?: DaftarPengacaraWhereInput | undefined;
}
