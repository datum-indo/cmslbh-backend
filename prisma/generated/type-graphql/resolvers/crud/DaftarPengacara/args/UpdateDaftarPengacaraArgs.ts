import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DaftarPengacaraUpdateInput } from "../../../inputs/DaftarPengacaraUpdateInput";
import { DaftarPengacaraWhereUniqueInput } from "../../../inputs/DaftarPengacaraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDaftarPengacaraArgs {
  @TypeGraphQL.Field(_type => DaftarPengacaraUpdateInput, {
    nullable: false
  })
  data!: DaftarPengacaraUpdateInput;

  @TypeGraphQL.Field(_type => DaftarPengacaraWhereUniqueInput, {
    nullable: false
  })
  where!: DaftarPengacaraWhereUniqueInput;
}
