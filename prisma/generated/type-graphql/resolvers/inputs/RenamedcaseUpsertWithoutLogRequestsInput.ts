import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutLogRequestsInput } from "../inputs/RenamedcaseCreateWithoutLogRequestsInput";
import { RenamedcaseUpdateWithoutLogRequestsInput } from "../inputs/RenamedcaseUpdateWithoutLogRequestsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutLogRequestsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutLogRequestsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutLogRequestsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutLogRequestsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutLogRequestsInput;
}
