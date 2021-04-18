import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCaseReferralInput } from "../inputs/PersonCreateOrConnectWithoutCaseReferralInput";
import { PersonCreateWithoutCaseReferralInput } from "../inputs/PersonCreateWithoutCaseReferralInput";
import { PersonUpdateWithoutCaseReferralInput } from "../inputs/PersonUpdateWithoutCaseReferralInput";
import { PersonUpsertWithoutCaseReferralInput } from "../inputs/PersonUpsertWithoutCaseReferralInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateOneWithoutCaseReferralInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCaseReferralInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCaseReferralInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutCaseReferralInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutCaseReferralInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutCaseReferralInput | undefined;
}
