import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCaseReferralInput } from "../inputs/PersonCreateOrConnectWithoutCaseReferralInput";
import { PersonCreateWithoutCaseReferralInput } from "../inputs/PersonCreateWithoutCaseReferralInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateNestedOneWithoutCaseReferralInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCaseReferralInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCaseReferralInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
