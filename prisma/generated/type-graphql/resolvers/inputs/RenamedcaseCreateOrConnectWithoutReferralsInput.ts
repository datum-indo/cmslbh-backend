import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutReferralsInput } from "../inputs/RenamedcaseCreateWithoutReferralsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateOrConnectWithoutReferralsInput {
  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: false
  })
  where!: RenamedcaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutReferralsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutReferralsInput;
}
