import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DaftarPengacaraCreateInput } from "../../../inputs/DaftarPengacaraCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDaftarPengacaraArgs {
  @TypeGraphQL.Field(_type => DaftarPengacaraCreateInput, {
    nullable: false
  })
  data!: DaftarPengacaraCreateInput;
}
