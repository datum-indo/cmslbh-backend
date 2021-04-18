import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutPelakusInput } from "../inputs/RenamedcaseCreateWithoutPelakusInput";
import { RenamedcaseUpdateWithoutPelakusInput } from "../inputs/RenamedcaseUpdateWithoutPelakusInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutPelakusInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutPelakusInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutPelakusInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutPelakusInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutPelakusInput;
}
