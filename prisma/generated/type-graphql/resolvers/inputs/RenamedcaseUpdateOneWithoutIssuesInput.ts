import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutIssuesInput } from "../inputs/RenamedcaseCreateOrConnectWithoutIssuesInput";
import { RenamedcaseCreateWithoutIssuesInput } from "../inputs/RenamedcaseCreateWithoutIssuesInput";
import { RenamedcaseUpdateWithoutIssuesInput } from "../inputs/RenamedcaseUpdateWithoutIssuesInput";
import { RenamedcaseUpsertWithoutIssuesInput } from "../inputs/RenamedcaseUpsertWithoutIssuesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutIssuesInput | undefined;

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

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutIssuesInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutIssuesInput | undefined;
}
