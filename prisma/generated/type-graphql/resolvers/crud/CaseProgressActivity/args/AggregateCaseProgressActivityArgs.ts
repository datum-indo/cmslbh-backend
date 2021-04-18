import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityOrderByInput } from "../../../inputs/CaseProgressActivityOrderByInput";
import { CaseProgressActivityWhereInput } from "../../../inputs/CaseProgressActivityWhereInput";
import { CaseProgressActivityWhereUniqueInput } from "../../../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCaseProgressActivityArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityOrderByInput], {
    nullable: true
  })
  orderBy?: CaseProgressActivityOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseProgressActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
