import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutReferralsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutReferralsInput";
import { RenamedcaseCreateWithoutReferralsInput } from "../inputs/RenamedcaseCreateWithoutReferralsInput";
import { RenamedcaseUpdateWithoutReferralsInput } from "../inputs/RenamedcaseUpdateWithoutReferralsInput";
import { RenamedcaseUpsertWithoutReferralsInput } from "../inputs/RenamedcaseUpsertWithoutReferralsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutReferralsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutReferralsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutReferralsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutReferralsInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutReferralsInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutReferralsInput | undefined;
}
