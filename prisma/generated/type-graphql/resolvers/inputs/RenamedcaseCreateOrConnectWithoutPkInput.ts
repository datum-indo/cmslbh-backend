import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutPkInput } from "../inputs/RenamedcaseCreateWithoutPkInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateOrConnectWithoutPkInput {
  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: false
  })
  where!: RenamedcaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutPkInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutPkInput;
}
