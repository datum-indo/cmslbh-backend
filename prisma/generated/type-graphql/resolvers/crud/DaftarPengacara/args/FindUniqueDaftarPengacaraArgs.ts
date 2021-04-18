import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DaftarPengacaraWhereUniqueInput } from "../../../inputs/DaftarPengacaraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDaftarPengacaraArgs {
  @TypeGraphQL.Field(_type => DaftarPengacaraWhereUniqueInput, {
    nullable: false
  })
  where!: DaftarPengacaraWhereUniqueInput;
}
