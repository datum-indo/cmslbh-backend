import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutReferralsInput } from "../inputs/RenamedcaseCreateWithoutReferralsInput";
import { RenamedcaseUpdateWithoutReferralsInput } from "../inputs/RenamedcaseUpdateWithoutReferralsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutReferralsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutReferralsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutReferralsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutReferralsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutReferralsInput;
}
